package com.campusdual.lituralia.api.core.service;

import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import java.util.List;
import java.util.Map;

public interface IListService {

    EntityResult listQuery(Map<?, ?> keyMap, List<?> attrList);
    EntityResult listInsert(Map<?, ?> attrMap);
    EntityResult listUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap);
    EntityResult listDelete(Map<?, ?> keyMap);

    EntityResult listBookQuery(Map<String, Object> keysValues, List<String> attributes)
            throws OntimizeJEERuntimeException;

    EntityResult listBookInsert(Map<String, Object> attributes) throws OntimizeJEERuntimeException;

    EntityResult listBookUpdate(Map<String, Object> attributes, Map<String, Object> KeyValues)
            throws OntimizeJEERuntimeException;

    EntityResult listBookDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException;

    EntityResult vListBookQuery(Map<String, Object> keysValues, List<String> attributes)
            throws OntimizeJEERuntimeException;

    EntityResult vListBookDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException;

//    // ---- BOOK LISTS ----
//
//    EntityResult listBookQuery(Map<String, Object> keysValues, List<String> attributes) throws OntimizeJEERuntimeException;
//    EntityResult listBookInsert(Map<String, Object> attributes) throws OntimizeJEERuntimeException;
//    EntityResult listBookUpdate(Map<String, Object> attributes, Map<String, Object> KeyValues) throws OntimizeJEERuntimeException;
//    EntityResult listBookDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException;
//

}
