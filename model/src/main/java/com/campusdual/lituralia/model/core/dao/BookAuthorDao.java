package com.campusdual.lituralia.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Lazy
@Repository(value = "BookAuthorDao")
@ConfigurationFile(configurationFile = "dao/BookAuthorDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class BookAuthorDao extends OntimizeJdbcDaoSupport {

    public static final String QUERY_VBOOKAUTHOR = "BOOKAUTHOR";

    public BookAuthorDao() {
        super();
    }
}