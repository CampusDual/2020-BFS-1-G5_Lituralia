package com.campusdual.lituralia.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Repository("LibroDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/LibroDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class LibroDao extends OntimizeJdbcDaoSupport {

    public static final String ATTR_ID_LIBRO = "id_libro";
    public static final String ATTR_ISBN = "isbn";
    public static final String ATTR_TITULO = "titulo";
    public static final String ATTR_SINOPSIS = "sinopsis";
    public static final String ATTR_FECHA_PUBLICACION = "fecha_publicacion";
    public static final String ATTR_PORTADA = "portada";
    public static final String ATTR_ID_EDITORIAL = "id_editorial";
}
