package com.campusdual.lituralia.model.core.service;

import com.campusdual.lituralia.api.core.service.IBookService;
import com.campusdual.lituralia.model.core.dao.BookAuthorDao;
import com.campusdual.lituralia.model.core.dao.BookDao;
import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;


@Service("BookService")
@Lazy
public class BookService implements IBookService {

    @Autowired
    private BookDao bookDao;

    @Autowired
    private BookAuthorDao bookAuthorDao;

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;


    // ---- BOOK ----

    public EntityResult bookQuery(Map<?, ?> keyMap, List<?> attrList) {
        return this.daoHelper.query(bookDao, keyMap, attrList);
    }

    public EntityResult bookInsert(Map<?, ?> attrMap) {
        return this.daoHelper.insert(bookDao, attrMap);
    }

    public EntityResult bookUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
        return this.daoHelper.update(bookDao, attrMap, keyMap);
    }

    public EntityResult bookDelete(Map<?, ?> keyMap) {
        return this.daoHelper.delete(this.bookDao, keyMap);
    }


    // ---- BOOK AUTHOR ----

    @Override
    public EntityResult bookAuthorQuery(Map<String, Object> keysValues, List<String> attributes)
        throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.bookAuthorDao, keysValues, attributes);
    }

    @Override
    public EntityResult bookAuthorInsert(Map<String, Object> attributes) throws OntimizeJEERuntimeException {
        return this.daoHelper.insert(this.bookAuthorDao, attributes);
    }

    @Override
    public EntityResult bookAuthorUpdate(Map<String, Object> attributes, Map<String, Object> KeyValues)
        throws OntimizeJEERuntimeException {
        return this.daoHelper.update(this.bookAuthorDao, attributes, attributes);
    }

    @Override
    public EntityResult bookAuthorDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.bookAuthorDao, keyValues);
    }

    @Override
    public EntityResult vBookAuthorQuery(Map<String, Object> keysValues, List<String> attributes)
        throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.bookAuthorDao, keysValues, attributes, BookAuthorDao.QUERY_VBOOKAUTHOR);
    }

}
