package com.campusdual.lituralia.model.core.dao;


import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Repository("OpinionDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/OpinionDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class OpinionDao extends OntimizeJdbcDaoSupport {

    public static final String ATTR_OPINION_ID = "opinion_id";
    public static final String ATTR_RATING = "rating";
    public static final String ATTR_REVIEW = "review";
    public static final String ATTR_OPINION_CREATE = "opinion_create";
    public static final String ATTR_OPINION_UPDATE = "opinion_update";
    public static final String ATTR_USER_= "user_";

}