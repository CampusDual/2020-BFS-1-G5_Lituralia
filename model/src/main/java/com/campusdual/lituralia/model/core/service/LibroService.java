package com.campusdual.lituralia.model.core.service;

import com.campusdual.lituralia.api.core.service.ILibroService;
import com.campusdual.lituralia.model.core.dao.LibroDao;
import com.ontimize.db.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;


@Service("LibroService")
@Lazy
public class LibroService implements ILibroService {

    @Autowired
    private LibroDao libroDao;

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    public EntityResult libroQuery(Map<?, ?> keyMap, List<?> attrList) {
        return this.daoHelper.query(libroDao, keyMap, attrList);
    }

    public EntityResult libroInsert(Map<?, ?> attrMap) {
        return this.daoHelper.insert(libroDao, attrMap);
    }

    public EntityResult libroUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
        return this.daoHelper.update(libroDao, attrMap, keyMap);
    }

    public EntityResult libroDelete(Map<?, ?> keyMap) {
        return this.daoHelper.delete(this.libroDao, keyMap);
    }
}
