package com.campusdual.lituralia.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Lazy
@Repository(value = "BookGenreDao")
@ConfigurationFile(configurationFile = "dao/BookGenreDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class BookGenreDao extends OntimizeJdbcDaoSupport {

    public static final String QUERY_VBOOKGENRE = "BOOKGENRE";

    public static final String ATTR_BOOK_GENRE_ID = "book_genre_id";
    public static final String ATTR_BOOK_ID = "book_id";
    public static final String ATTR_GENRE_ID = "genre_id";

    public BookGenreDao() {
        super();
    }
}