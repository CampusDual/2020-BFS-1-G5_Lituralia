package com.campusdual.lituralia.model.core.service;

import com.campusdual.lituralia.api.core.service.IAuthorService;
import com.campusdual.lituralia.model.core.dao.AuthorDao;
import com.ontimize.db.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import javax.swing.text.Keymap;
import java.util.List;
import java.util.Map;

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
}
