package kg.enesaitech.freelancer.security;


import org.apache.log4j.Logger;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.credential.SimpleCredentialsMatcher;
import org.apache.shiro.crypto.hash.Md5Hash;

public class MyCredentialsMatcher extends SimpleCredentialsMatcher {
	
	Logger log = Logger.getLogger(MyCredentialsMatcher.class);
	 
    @Override
    public boolean doCredentialsMatch(AuthenticationToken tok, AuthenticationInfo info)
    {
        String tokenCredentials = charArrayToString(tok.getCredentials());
        String encryptedToken = new Md5Hash(tokenCredentials).toString();
 
        String accountCredentials = charArrayToString(info.getCredentials());
        
        if(accountCredentials.equals(encryptedToken)){
        	return true;
        }else{
        	log.error("credentials doesn't match");
        	return false;
        }
        
    }
 
    private String charArrayToString(Object credentials) {
        return new String((char[]) credentials);
    }
}