package com.campusdual.lituralia.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Lazy
@Repository(value = "BookAuthorDao")
@ConfigurationFile(configurationFile = "dao/BookAuthorDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class BookAuthorDao extends OntimizeJdbcDaoSupport {

    public static final String ATTR_BOOK_AUTHOR_ID = "book_author_id";
    public static final String ATTR_BOOK_ID = "book_id";
    public static final String ATTR_AUTHOR_ID = "author_id";

    public BookAuthorDao() {
        super();
    }
}