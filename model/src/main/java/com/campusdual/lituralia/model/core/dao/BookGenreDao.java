package com.campusdual.lituralia.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Lazy
@Repository(value = "BookGenreDao")
@ConfigurationFile(configurationFile = "dao/BookGenreDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class BookGenreDao extends OntimizeJdbcDaoSupport {

    public static final String ATTR_BOOK_GENRE_ID = "book_genre_id";
    public static final String ATTR_BOOK_ID = "book_id";
    public static final String ATTR_GENRE_ID = "genre_id";

    public static final String QUERY_VBOOKGENRE = "BOOKGENRE";

    public static final String QUERY_VBOOKDETAILSGENRE = "BOOKDETAILSGENRE";

    public static final String QUERY_VBOOKDETAILSGENRE_ATTR_PUBLISHER_NAME = "publisher_name";
    public static final String QUERY_VBOOKDETAILSGENRE_ATTR_GENRE_IDS = "genre_ids";
    public static final String QUERY_VBOOKDETAILSGENRE_ATTR_GENRE_NAMES = "genre_names";
    public static final String QUERY_VBOOKDETAILSGENRE_ATTR_AUTHOR_IDS = "author_ids";
    public static final String QUERY_VBOOKDETAILSGENRE_ATTR_AUTHOR_NAMES = "author_names";
    public static final String QUERY_VBOOKDETAILSGENRE_ATTR_AVG_RATING = "avg_rating";
    public static final String QUERY_VBOOKDETAILSGENRE_ATTR_RATINGS = "ratings";

    public BookGenreDao() {
        super();
    }
}