package kg.enesaitech.freelancer.provider;

import org.dozer.DozerBeanMapper;
import org.dozer.Mapper;

public class DozerMapperProvider {

	private static Mapper mapper = null;
	
	public static Mapper getMapper(){
		if(mapper == null){
			mapper = new DozerBeanMapper();
		}
		return mapper;
	}
}
