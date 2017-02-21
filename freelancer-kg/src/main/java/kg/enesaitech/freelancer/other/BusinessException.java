package kg.enesaitech.freelancer.other;

import javax.ws.rs.*;
import javax.ws.rs.core.*;
import javax.ws.rs.core.Response.*;

public class BusinessException extends WebApplicationException{

	private static final long serialVersionUID = 1L;
	
	public BusinessException()
    {
        this("You have logical Exception, please correct");
    }

	public BusinessException(String message){
		super(Response.status(Status.METHOD_NOT_ALLOWED).type(MediaType.APPLICATION_JSON).entity(message).build());
	}
}