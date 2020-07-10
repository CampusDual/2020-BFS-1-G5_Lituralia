package com.campusdual.lituralia.model.core.service;

import com.campusdual.lituralia.api.core.service.ISigninService;
import com.campusdual.lituralia.model.core.dao.UserDao;
import com.ontimize.db.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

@Service("SigninService")
@Lazy
public class SigninService implements ISigninService {

    @Autowired
    private UserDao userDao;

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    public EntityResult userInsert(Map<?, ?> attrMap) {
        return this.daoHelper.insert(userDao, attrMap);
    }
}
