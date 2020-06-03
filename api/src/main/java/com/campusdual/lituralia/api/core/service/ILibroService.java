package com.campusdual.lituralia.api.core.service;

import com.ontimize.db.EntityResult;
import java.util.List;
import java.util.Map;

public interface ILibroService {

    EntityResult libroQuery(Map<?, ?> keyMap, List<?> attrList);

    EntityResult libroInsert(Map<?, ?> attrMap);

    EntityResult libroUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap);

    EntityResult libroDelete(Map<?, ?> keyMap);
}
