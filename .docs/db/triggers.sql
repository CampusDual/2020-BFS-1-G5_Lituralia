-- My List Auto Initialization

CREATE OR REPLACE FUNCTION p_initialize_private_list()
    RETURNS trigger AS
$$

BEGIN
    INSERT INTO lituralia.lists (list_name, list_public, list_desc, user_) VALUES ('MYLIST', false, '', NEW.user_);
    RETURN NEW;
END;
$$
    LANGUAGE 'plpgsql';

DROP TRIGGER IF EXISTS t_user_private_list on lituralia.tuser;
CREATE TRIGGER t_user_private_list
    AFTER INSERT
    ON lituralia.tuser
    FOR EACH ROW
EXECUTE PROCEDURE p_initialize_private_list();


-- List update update_date on list_books update

CREATE OR REPLACE FUNCTION p_list_books_update_date()
    RETURNS trigger AS
$$

BEGIN

    IF TG_OP = 'DELETE' THEN
        UPDATE lituralia.lists SET list_update = now() WHERE list_id = OLD.list_id;
        RETURN OLD;
    end if;
    UPDATE lituralia.lists SET list_update = now() WHERE list_id = NEW.list_id;
    RETURN NEW;

END;
$$
    LANGUAGE 'plpgsql';

DROP TRIGGER IF EXISTS t_update_list_books on lituralia.list_books;
CREATE TRIGGER t_update_list_books
    AFTER UPDATE OR INSERT OR DELETE
    ON lituralia.list_books
    FOR EACH ROW
EXECUTE PROCEDURE p_list_books_update_date();


-- List update update_date on list update

CREATE OR REPLACE FUNCTION p_lists_update_date()
    RETURNS trigger AS
$$

BEGIN
    IF NEW.list_update = OLD.list_update THEN
        UPDATE lituralia.lists SET list_update = now() WHERE list_id = NEW.list_id;
    end if;
    RETURN NEW;
END;
$$
    LANGUAGE 'plpgsql';

DROP TRIGGER IF EXISTS t_update_lists on lituralia.lists;
CREATE TRIGGER t_update_lists
    AFTER UPDATE
    ON lituralia.lists
    FOR EACH ROW
EXECUTE PROCEDURE p_lists_update_date();


-- Opinion update update_date on opinion update

CREATE OR REPLACE FUNCTION p_opinion_update_date()
    RETURNS trigger AS
$$

BEGIN
    IF NEW.opinion_update = OLD.opinion_update THEN
        UPDATE lituralia.opinions SET opinion_update = now() WHERE opinion_id = NEW.opinion_id;
    end if;
    RETURN NEW;
END;
$$
    LANGUAGE 'plpgsql';

DROP TRIGGER IF EXISTS t_update_opinions on lituralia.opinions;
CREATE TRIGGER t_update_opinions
    AFTER UPDATE
    ON lituralia.opinions
    FOR EACH ROW
EXECUTE PROCEDURE p_opinion_update_date();