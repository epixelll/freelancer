package kg.enesaitech.freelancer.service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import kg.enesaitech.freelancer.dao.UserHome;
import kg.enesaitech.freelancer.entity.User;
import kg.enesaitech.freelancer.generic.GenericHome;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {
	
	@Autowired
	private UserHome userHome;
	
	@Autowired
	private GenericHome<User> genericUserHome;
	
	public User getByUserName(String string) {
		return userHome.getByUserName(string);
	}
	
	@Transactional
	public User update(User user) {
		if(user.getChangePassword() != null && user.getChangePassword())
			user.setPassword(getMD5(user.getPassword()));
		else{
			User user2 = userHome.findById(User.class, user.getId());
			user.setPassword(user2.getPassword());
		}
		return userHome.merge(user);
	}

	@Transactional
	public void create(User user) {
		user.setPassword(getMD5(user.getPassword()));
		genericUserHome.merge(user);
	}
	
	public String getMD5(String password){
		MessageDigest md;
		try {
			md = MessageDigest.getInstance("MD5");
			md.update(password.getBytes());
			byte[] digest = md.digest();
			StringBuffer sb = new StringBuffer();
			for (byte b : digest) {
				sb.append(String.format("%02x", b & 0xff));
			}

			return sb.toString();
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
			return null;
		}
		
	}
	
}