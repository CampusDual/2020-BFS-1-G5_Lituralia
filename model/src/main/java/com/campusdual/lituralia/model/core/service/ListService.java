package com.campusdual.lituralia.model.core.service;

import com.campusdual.lituralia.api.core.service.IListService;
import com.campusdual.lituralia.model.core.dao.ListBookDao;
import com.campusdual.lituralia.model.core.dao.ListDao;
import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;


@Service("ListService")
@Lazy
public class ListService implements IListService {

    @Autowired
    private ListDao listDao;

    @Autowired
    private ListBookDao listBookDao;

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    public EntityResult listQuery(Map<?, ?> keyMap, List<?> attrList) {
        return this.daoHelper.query(listDao, keyMap, attrList);
    }

    public EntityResult listInsert(Map<?, ?> attrMap) {
        return this.daoHelper.insert(listDao, attrMap);
    }

    public EntityResult listUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
        return this.daoHelper.update(listDao, attrMap, keyMap);
    }

    public EntityResult listDelete(Map<?, ?> keyMap) {
        return this.daoHelper.delete(this.listDao, keyMap);
    }

    //---- BOOKs LIST ----

    @Override
    public EntityResult listBookQuery(Map<String, Object> keysValues, List<String> attributes)
        throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.listBookDao, keysValues, attributes);
    }

    @Override
    public EntityResult listBookInsert(Map<String, Object> attributes) throws OntimizeJEERuntimeException {
        return this.daoHelper.insert(this.listBookDao, attributes);
    }

    @Override
    public EntityResult listBookUpdate(Map<String, Object> attributes, Map<String, Object> KeyValues)
        throws OntimizeJEERuntimeException {
        return this.daoHelper.update(this.listBookDao, attributes, attributes);
    }

    @Override
    public EntityResult listBookDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.listBookDao, keyValues);
    }

    // ---- V BOOK LIST

    @Override
    public EntityResult vListBookQuery(Map<String, Object> keysValues, List<String> attributes)
        throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.listBookDao, keysValues, attributes, ListBookDao.QUERY_V_LIST_BOOKS);
    }

    @Override
    public EntityResult vListBookDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.listBookDao, keyValues);
    }

}
