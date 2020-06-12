package com.campusdual.lituralia.model.core.dao;


import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Repository("PublisherDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/AuthorDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class PublisherDao extends OntimizeJdbcDaoSupport {

    public static final String ATTR_PUBLISHER_ID = "publisher_id";
    public static final String ATTR_PUBLISHER_NAME = "publisher_name";
    public static final String ATTR_PUBLISHER_DESC = "publisher_desc";
    public static final String ATTR_PUBLISHER_LOGO = "publisher_logo";

}