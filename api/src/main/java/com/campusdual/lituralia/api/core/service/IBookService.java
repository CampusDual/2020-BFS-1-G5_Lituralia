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

    // ---- BOOK AUTHORS ----

    EntityResult bookAuthorQuery(Map<String, Object> keysValues, List<String> attributes) throws OntimizeJEERuntimeException;
    EntityResult bookAuthorInsert(Map<String, Object> attributes) throws OntimizeJEERuntimeException;
    EntityResult bookAuthorUpdate(Map<String, Object> attributes, Map<String, Object> KeyValues) throws OntimizeJEERuntimeException;
    EntityResult bookAuthorDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException;

    EntityResult vBookAuthorQuery(Map<String, Object> keysValues, List<String> attributes) throws OntimizeJEERuntimeException;
    EntityResult vBookAuthorDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException;

    // ---- BOOK GENRES ----

    EntityResult bookGenreQuery(Map<String, Object> keysValues, List<String> attributes) throws OntimizeJEERuntimeException;
    EntityResult bookGenreInsert(Map<String, Object> attributes) throws OntimizeJEERuntimeException;
    EntityResult bookGenreUpdate(Map<String, Object> attributes, Map<String, Object> KeyValues) throws OntimizeJEERuntimeException;
    EntityResult bookGenreDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException;

    EntityResult vBookGenreQuery(Map<String, Object> keysValues, List<String> attributes) throws OntimizeJEERuntimeException;
    EntityResult vBookGenreDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException;

    // ---- BOOK PUBLISHER ----

    EntityResult bookPublisherQuery(Map<String, Object> keysValues, List<String> attributes) throws OntimizeJEERuntimeException;

    EntityResult bookPublisherInsert(Map<String, Object> attributes) throws OntimizeJEERuntimeException;

    EntityResult bookPublisherUpdate(Map<String, Object> attributes, Map<String, Object> KeyValues) throws OntimizeJEERuntimeException;

    EntityResult bookPublisherDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException;

    // ---- BOOK DETAILS VIEW ----

    EntityResult vBookDetailsUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap);

    EntityResult vBookDetailsDelete(Map<?, ?> keyMap);

    EntityResult vBookRatingsQuery(Map<String, Object> keysValues, List<String> attributes) throws OntimizeJEERuntimeException;

    // ---- BOOK RATINGS VIEW ----

    EntityResult vBookDetailsQuery(Map<String, Object> keysValues, List<String> attributes) throws OntimizeJEERuntimeException;

    EntityResult vBookRatingsUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap);

    EntityResult vBookRatingsDelete(Map<?, ?> keyMap);

    // ---- BOOK OPINIONS VIEW ----
    EntityResult vBookOpinionsQuery(Map<String, Object> keysValues, List<String> attributes) throws OntimizeJEERuntimeException;

    EntityResult vBookOpinionsUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap);

    EntityResult vBookOpinionsDelete(Map<?, ?> keyMap);
}
