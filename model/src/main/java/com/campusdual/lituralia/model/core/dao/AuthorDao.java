package com.campusdual.lituralia.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Repository("AuthorDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/AuthorDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class AuthorDao extends OntimizeJdbcDaoSupport {

    public static final String ATTR_AUTHOR_ID = "author_id";
    public static final String ATTR_AUTHOR_NAME = "author_name";
    public static final String ATTR_AUTHOR_BIRTH = "author_birth";
    public static final String ATTR_DEATH = "author_death";
}