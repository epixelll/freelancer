package kg.enesaitech.freelancer.security;

import java.net.URISyntaxException;
import java.util.Set;

import kg.enesaitech.freelancer.dao.RoleHome;
import kg.enesaitech.freelancer.dao.UserHome;
import kg.enesaitech.freelancer.entity.User;

import org.apache.log4j.Logger;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.AuthorizationException;
import org.apache.shiro.authz.AuthorizationInfo;
//import org.apache.shiro.authz.Authorizer;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;
//import org.hibernate.mapping.Set;
//import javax.naming.AuthenticationException;
//import javax.naming.InitialContext;
//import javax.naming.NamingException;
//import javax.sql.DataSource;

public class MyRealm extends AuthorizingRealm {
	private static final Logger log = Logger.getLogger(MyRealm.class);

	@Autowired
	UserHome usersHome;
	
	@Autowired
	RoleHome roleHome;
	
	protected boolean permissionsLookupEnabled = false;
	
	public MyRealm() {
		super();
	}
	
	
	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token)
				throws org.apache.shiro.authc.AuthenticationException {
		
		UsernamePasswordToken upToken = (UsernamePasswordToken) token;
		String username = upToken.getUsername();
		
		log.info("username : " + username + " | " + "upToken : " + upToken.toString());
		
		AuthenticationInfo info = null;
		User user = usersHome.getByUserName(username);
		
		if(user == null || user.getPassword() == null){
			log.error("No account found for user [" + username + "]");
//			throw new UnauthenticatedException("Неправильный пользователь/пароль для [" + username + "]");
			java.net.URI location;
			try {
				location = new java.net.URI("/freelancer-kg/unauthorized.html");
//				throw new WebApplicationException(Response.temporaryRedirect(location).build());
				throw new IncorrectCredentialsException();
			} catch (URISyntaxException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	        

		}
		info = new SimpleAuthenticationInfo(username, user.getPassword().toCharArray(), getName());
		log.info("info : " + info.toString());
		
		return info;
	}
	
	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
		if (principals == null) {
			log.error("PrincipalCollection method argument cannot be null.");
			throw new AuthorizationException("PrincipalCollection method argument cannot be null.");
		}
		
		String username = (String) getAvailablePrincipal(principals);
		System.out.println("Auth | username : " + username);

		
		Set<String> roleNames = roleHome.getNameSetByUserName(username);

		
		SimpleAuthorizationInfo info = new SimpleAuthorizationInfo(roleNames);
		return info;
	}
	
}