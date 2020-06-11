package com.campusdual.lituralia.api.core.service;

import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import java.util.List;
import java.util.Map;

public interface IBookService {

    // ---- BOOK ----
    EntityResult bookQuery(Map<?, ?> keyMap, List<?> attrList);
    EntityResult bookInsert(Map<?, ?> attrMap);
    EntityResult bookUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap);
    EntityResult bookDelete(Map<?, ?> keyMap);

    // ---- BOOK AUTHOR ----
    EntityResult bookAuthorQuery(Map<String, Object> keysValues, List<String> attributes) throws OntimizeJEERuntimeException;
    EntityResult bookAuthorInsert(Map<String, Object> attributes) throws OntimizeJEERuntimeException;
    EntityResult bookAuthorUpdate(Map<String, Object> attributes, Map<String, Object> KeyValues) throws OntimizeJEERuntimeException;
    EntityResult bookAuthorDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException;

    // ---- V BOOK AUTHOR ----
    EntityResult vBookAuthorQuery(Map<String, Object> keysValues, List<String> attributes) throws OntimizeJEERuntimeException;

    // ---- BOOK GENRE ----
    EntityResult bookGenreQuery(Map<String, Object> keysValues, List<String> attributes) throws OntimizeJEERuntimeException;
    EntityResult bookGenreInsert(Map<String, Object> attributes) throws OntimizeJEERuntimeException;
    EntityResult bookGenreUpdate(Map<String, Object> attributes, Map<String, Object> KeyValues) throws OntimizeJEERuntimeException;
    EntityResult bookGenreDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException;

    // ---- V BOOK GENRE ----
    EntityResult vBookGenreQuery(Map<String, Object> keysValues, List<String> attributes) throws OntimizeJEERuntimeException;
}
