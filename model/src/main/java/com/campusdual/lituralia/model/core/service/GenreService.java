package com.campusdual.lituralia.model.core.service;

import com.campusdual.lituralia.api.core.service.IGenreService;
import com.campusdual.lituralia.model.core.dao.BookGenreDao;
import com.campusdual.lituralia.model.core.dao.GenreDao;
import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;


@Service("GenreService")
@Lazy
public class GenreService implements IGenreService {

    @Autowired
    private GenreDao genreDao;

    @Autowired
    private BookGenreDao bookGenreDao;

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    public EntityResult genreQuery(Map<?, ?> keyMap, List<?> attrList) {
        return this.daoHelper.query(genreDao, keyMap, attrList);
    }

    public EntityResult genreInsert(Map<?, ?> attrMap) {
        return this.daoHelper.insert(genreDao, attrMap);
    }

    public EntityResult genreUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
        return this.daoHelper.update(genreDao, attrMap, keyMap);
    }

    public EntityResult genreDelete(Map<?, ?> keyMap) {
        return this.daoHelper.delete(this.genreDao, keyMap);
    }

// ---- BOOKs GENRE ----

    @Override
    public EntityResult genreBookQuery(Map<String, Object> keysValues, List<String> attributes)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.bookGenreDao, keysValues, attributes);
    }

    @Override
    public EntityResult genreBookInsert(Map<String, Object> attributes) throws OntimizeJEERuntimeException {
        return this.daoHelper.insert(this.bookGenreDao, attributes);
    }

    @Override
    public EntityResult genreBookUpdate(Map<String, Object> attributes, Map<String, Object> KeyValues)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.update(this.bookGenreDao, attributes, attributes);
    }

    @Override
    public EntityResult genreBookDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.bookGenreDao, keyValues);
    }


    // ---- V BOOK GENRE

    @Override
    public EntityResult vGenreBookQuery(Map<String, Object> keysValues, List<String> attributes)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.bookGenreDao, keysValues, attributes, BookGenreDao.QUERY_VBOOKGENRE);
    }

    @Override
    public EntityResult vGenreBookDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.bookGenreDao, keyValues);
    }

    // ---- V GENRE BOOKS DETAILS

    @Override
    public EntityResult vGenreBookDetailsQuery(Map<String, Object> keysValues, List<String> attributes)
        throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.bookGenreDao, keysValues, attributes, BookGenreDao.QUERY_VBOOKDETAILSGENRE);
    }

    @Override
    public EntityResult vGenreBookDetailsDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.bookGenreDao, keyValues);
    }
}
