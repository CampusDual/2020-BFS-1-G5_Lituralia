package com.campusdual.lituralia.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Repository("GenreDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/GenreDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class GenreDao extends OntimizeJdbcDaoSupport {

    public static final String ATTR_GENRE_ID   = "genre_id";
    public static final String ATTR_GENRE_NAME = "genre_name";
    public static final String ATTR_GENRE_DESC = "genre_desc";
}