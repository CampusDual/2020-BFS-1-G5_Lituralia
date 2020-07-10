package com.campusdual.lituralia.api.core.service;


import com.ontimize.db.EntityResult;
import java.util.Map;


public interface ISigninService {
	EntityResult userInsert(Map<?, ?> attrMap);
}
