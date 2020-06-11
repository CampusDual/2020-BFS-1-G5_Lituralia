package com.campusdual.lituralia.api.core.service;

import com.ontimize.db.EntityResult;
import java.util.List;
import java.util.Map;

public interface IGenreService {

    EntityResult genreQuery(Map<?, ?> keyMap, List<?> attrList);
    EntityResult genreInsert(Map<?, ?> attrMap);
    EntityResult genreUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap);
    EntityResult genreDelete(Map<?, ?> keyMap);
}
