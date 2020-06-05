package com.campusdual.lituralia.api.core.service;

import com.ontimize.db.EntityResult;
import java.util.List;
import java.util.Map;

public interface IBookService {

    EntityResult bookQuery(Map<?, ?> keyMap, List<?> attrList);

    EntityResult bookInsert(Map<?, ?> attrMap);

    EntityResult bookUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap);

    EntityResult bookDelete(Map<?, ?> keyMap);
}
