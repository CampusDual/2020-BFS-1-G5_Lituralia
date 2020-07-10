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
    public static final String ATTR_TITLE = "title";
    public static final String ATTR_SYNOPSIS = "synopsis";
    public static final String ATTR_PUBLISH_DATE = "publish_date";
    public static final String ATTR_COVER = "cover";
    public static final String ATTR_PUBLISHER_ID = "publisher_id";

    public static final String QUERY_VBOOKDETAILS = "BOOKDETAILS";

    public static final String QUERY_VBOOKDETAILS_ATTR_PUBLISHER_NAME = "publisher_name";
    public static final String QUERY_VBOOKDETAILS_ATTR_GENRE_IDS = "genre_ids";
    public static final String QUERY_VBOOKDETAILS_ATTR_GENRE_NAMES = "genre_names";
    public static final String QUERY_VBOOKDETAILS_ATTR_AUTHOR_IDS = "author_ids";
    public static final String QUERY_VBOOKDETAILS_ATTR_AUTHOR_NAMES = "author_names";
    public static final String QUERY_VBOOKDETAILS_ATTR_AVG_RATING = "avg_rating";
    public static final String QUERY_VBOOKDETAILS_ATTR_RATINGS = "ratings";

    public static final String QUERY_VBOOKRATINGS = "BOOKRATINGS";

    public static final String QUERY_VBOOKRATINGS_ATTR_AVG_RATING = "avg_rating";
    public static final String QUERY_VBOOKRATINGS_ATTR_RATINGS = "ratings";

}
