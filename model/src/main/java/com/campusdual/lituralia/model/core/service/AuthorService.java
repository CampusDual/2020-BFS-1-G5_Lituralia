package com.campusdual.lituralia.model.core.service;

import com.campusdual.lituralia.api.core.service.IAuthorService;
import com.campusdual.lituralia.model.core.dao.AuthorDao;
import com.campusdual.lituralia.model.core.dao.BookAuthorDao;
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
    private BookAuthorDao bookAuthorDao;

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

    // ---- AUTHOR RATINGS VIEW ----

    @Override
    public EntityResult vAuthorRatingsQuery(Map<String, Object> keysValues, List<String> attributes) throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.authorDao, keysValues, attributes, AuthorDao.QUERY_VAUTHORRATINGS);
    }

    @Override
    public EntityResult vAuthorRatingsUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
        return this.daoHelper.update(authorDao, attrMap, keyMap);
    }

    @Override
    public EntityResult vAuthorRatingsDelete(Map<?, ?> keyMap) {
        return this.daoHelper.delete(this.authorDao, keyMap);
    }

    // ---- AUTHOR BOOKS ----

    @Override
    public EntityResult authorBookQuery(Map<String, Object> keysValues, List<String> attributes)
        throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.bookAuthorDao, keysValues, attributes);
    }

    @Override
    public EntityResult authorBookInsert(Map<String, Object> attributes) throws OntimizeJEERuntimeException {
        return this.daoHelper.insert(this.bookAuthorDao, attributes);
    }

    @Override
    public EntityResult authorBookUpdate(Map<String, Object> attributes, Map<String, Object> KeyValues)
        throws OntimizeJEERuntimeException {
        return this.daoHelper.update(this.bookAuthorDao, attributes, attributes);
    }

    @Override
    public EntityResult authorBookDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.bookAuthorDao, keyValues);
    }

    // ---- V AUTHOR BOOKS

    @Override
    public EntityResult vAuthorBookQuery(Map<String, Object> keysValues, List<String> attributes)
        throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.bookAuthorDao, keysValues, attributes, BookAuthorDao.QUERY_VBOOKAUTHOR);
    }

    @Override
    public EntityResult vAuthorBookDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.bookAuthorDao, keyValues);
    }

    // ---- V AUTHOR BOOKS DETAILS

    @Override
    public EntityResult vAuthorBookDetailsQuery(Map<String, Object> keysValues, List<String> attributes)
        throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.bookAuthorDao, keysValues, attributes, BookAuthorDao.QUERY_VBOOKDETAILSAUTHOR);
    }

    @Override
    public EntityResult vAuthorBookDetailsDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.bookAuthorDao, keyValues);
    }


}
