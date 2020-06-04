package com.campusdual.lituralia.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Repository("BookDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/BookDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class BookDao extends OntimizeJdbcDaoSupport {

    public static final String ATTR_BOOK_ID = "book_id";
    public static final String ATTR_ISBN = "isbn";
    public static final String ATTR_TITULE = "title";
    public static final String ATTR_SYNOPSIS = "synopsis";
    public static final String ATTR_PUBLISH_DATE = "publish_date";
    public static final String ATTR_COVER = "cover";
    public static final String ATTR_PUBLISHER_ID = "publisher_id";
}
