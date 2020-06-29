package com.campusdual.lituralia.api.core.service;

import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

import java.util.List;
import java.util.Map;

public interface IGenreService {

    EntityResult genreQuery(Map<?, ?> keyMap, List<?> attrList);
    EntityResult genreInsert(Map<?, ?> attrMap);
    EntityResult genreUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap);
    EntityResult genreDelete(Map<?, ?> keyMap);
    // ---- BOOK GENRES ----

    EntityResult genreBookQuery(Map<String, Object> keysValues, List<String> attributes) throws OntimizeJEERuntimeException;
    EntityResult genreBookInsert(Map<String, Object> attributes) throws OntimizeJEERuntimeException;
    EntityResult genreBookUpdate(Map<String, Object> attributes, Map<String, Object> KeyValues) throws OntimizeJEERuntimeException;
    EntityResult genreBookDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException;

    EntityResult vGenreBookQuery(Map<String, Object> keysValues, List<String> attributes) throws OntimizeJEERuntimeException;
    EntityResult vGenreBookDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException;

}
