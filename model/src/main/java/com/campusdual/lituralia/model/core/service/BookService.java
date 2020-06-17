package com.campusdual.lituralia.model.core.service;

import com.campusdual.lituralia.api.core.service.IBookService;
import com.campusdual.lituralia.model.core.dao.BookAuthorDao;
import com.campusdual.lituralia.model.core.dao.BookDao;
import com.campusdual.lituralia.model.core.dao.BookGenreDao;
import com.campusdual.lituralia.model.core.dao.PublisherDao;
import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service("BookService")
@Lazy
public class BookService implements IBookService {

    @Autowired
    private BookDao bookDao;

    @Autowired
    private BookAuthorDao bookAuthorDao;

    @Autowired
    private BookGenreDao bookGenreDao;

    @Autowired
    private PublisherDao publisherDao;

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

    // ---- BOOK AUTHORS ----

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

    // ---- V BOOK AUTHORS

    @Override
    public EntityResult vBookAuthorQuery(Map<String, Object> keysValues, List<String> attributes)
        throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.bookAuthorDao, keysValues, attributes,BookAuthorDao.QUERY_VBOOKAUTHOR);
    }

    @Override
    public EntityResult vBookAuthorDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.bookAuthorDao, keyValues);
    }

    // ---- BOOK GENRES ----

    @Override
    public EntityResult bookGenreQuery(Map<String, Object> keysValues, List<String> attributes)
        throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.bookGenreDao, keysValues, attributes);
    }

    @Override
    public EntityResult bookGenreInsert(Map<String, Object> attributes) throws OntimizeJEERuntimeException {
        return this.daoHelper.insert(this.bookGenreDao, attributes);
    }

    @Override
    public EntityResult bookGenreUpdate(Map<String, Object> attributes, Map<String, Object> KeyValues)
        throws OntimizeJEERuntimeException {
        return this.daoHelper.update(this.bookGenreDao, attributes, attributes);
    }

    @Override
    public EntityResult bookGenreDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.bookGenreDao, keyValues);
    }


    // ---- V BOOK GENRE

    @Override
    public EntityResult vBookGenreQuery(Map<String, Object> keysValues, List<String> attributes)
        throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.bookGenreDao, keysValues, attributes,BookGenreDao.QUERY_VBOOKGENRE);
    }

    @Override
    public EntityResult vBookGenreDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.bookGenreDao, keyValues);
    }

    // ---- BOOK PUBLISHER ----

    @Override
    public EntityResult bookPublisherQuery(Map<String, Object> keysValues, List<String> attributes) throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.publisherDao, keysValues, attributes);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public EntityResult bookPublisherInsert(Map<String, Object> attributes) throws OntimizeJEERuntimeException {
        return this.daoHelper.insert(this.publisherDao, attributes);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public EntityResult bookPublisherUpdate(Map<String, Object> attributes, Map<String, Object> keyValues) throws OntimizeJEERuntimeException {
        return this.daoHelper.update(this.publisherDao, keyValues, attributes);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public EntityResult bookPublisherDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.publisherDao, keyValues);
    }

    // ---- BOOK DETAILS VIEW ----

    @Override
    public EntityResult vBookDetailsQuery(Map<String, Object> keysValues, List<String> attributes) throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.bookDao, keysValues, attributes, BookDao.QUERY_VBOOKDETAILS);
    }

    @Override
    public EntityResult vBookDetailsUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
        return this.daoHelper.update(bookDao, attrMap, keyMap);
    }

    @Override
    public EntityResult vBookDetailsDelete(Map<?, ?> keyMap) {
        return this.daoHelper.delete(this.bookDao, keyMap);
    }



}
