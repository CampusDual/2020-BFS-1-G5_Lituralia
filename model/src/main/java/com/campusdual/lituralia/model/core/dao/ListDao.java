package com.campusdual.lituralia.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Repository("ListDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/ListDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class ListDao extends OntimizeJdbcDaoSupport {

    public static final String ATTR_LIST_ID   = "list_id";
    public static final String ATTR_LIST_NAME = "list_name";
    public static final String ATTR_LIST_DESC = "list_desc";
    public static final String ATTR_LIST_PUBLIC = "list_public";
    public static final String ATTR_LIST_CREATE = "list_create";
    public static final String ATTR_LIST_UPDATE = "list_update";
    public static final String ATTR_USER_ = "user_";

}