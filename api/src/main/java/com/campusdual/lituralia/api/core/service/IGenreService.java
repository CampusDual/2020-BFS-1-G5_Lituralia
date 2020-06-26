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

    EntityResult booksGenreQuery(Map<String, Object> keysValues, List<String> attributes) throws OntimizeJEERuntimeException;
    EntityResult booksGenreInsert(Map<String, Object> attributes) throws OntimizeJEERuntimeException;
    EntityResult booksGenreUpdate(Map<String, Object> attributes, Map<String, Object> KeyValues) throws OntimizeJEERuntimeException;
    EntityResult booksGenreDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException;

    EntityResult vBooksGenreQuery(Map<String, Object> keysValues, List<String> attributes) throws OntimizeJEERuntimeException;
    EntityResult vBooksGenreDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException;

}
