package com.campusdual.lituralia.model.core.service;

import com.campusdual.lituralia.api.core.service.IAuthorService;
import com.campusdual.lituralia.model.core.dao.AuthorDao;
import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

@Service("AuthorService")
@Lazy
public class AuthorService implements IAuthorService {
    @Autowired
    private AuthorDao authorDao;

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;


    @Override
    public EntityResult authorQuery(Map<?, ?> keyMap, List<?> attrList) {
        return this.daoHelper.query(authorDao, keyMap, attrList);
    }

    @Override
    public EntityResult authorInsert(Map<?, ?> attrMap) {
        return this.daoHelper.insert(authorDao, attrMap);
    }

    @Override
    public EntityResult authorUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
        return this.daoHelper.update(authorDao, attrMap, keyMap);
    }

    @Override
    public EntityResult authorDelete(Map<?, ?> keyMap) {
        return this.daoHelper.delete(this.authorDao, keyMap);
    }

    // ---- AUTHOR DETAILS VIEW ----

    @Override
    public EntityResult vAuthorDetailsQuery(Map<String, Object> keysValues, List<String> attributes) throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.authorDao, keysValues, attributes, AuthorDao.QUERY_VAUTHORDETAILS);
    }

    @Override
    public EntityResult vAuthorDetailsUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
        return this.daoHelper.update(authorDao, attrMap, keyMap);
    }

    @Override
    public EntityResult vAuthorDetailsDelete(Map<?, ?> keyMap) {
        return this.daoHelper.delete(this.authorDao, keyMap);
    }


}
