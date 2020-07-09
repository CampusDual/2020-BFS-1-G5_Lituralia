package com.campusdual.lituralia.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Repository("ListBookDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/ListBookDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class ListBookDao extends OntimizeJdbcDaoSupport {

    public static final String ATTR_LIST_BOOK_ID   = "list_book_id";
    public static final String ATTR_LIST_ID   = "list_id";
    public static final String ATTR_BOOK_ID   = "book_id";

    public static final String QUERY_V_LIST_BOOKS = "LIST_BOOKS";

}