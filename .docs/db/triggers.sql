CREATE OR REPLACE FUNCTION p_initialize_private_list()
    RETURNS trigger AS
$$

BEGIN
    INSERT INTO lituralia.lists (list_name, list_public, list_desc, user_) VALUES ('MYLIST', false, '', NEW.user_);
    RETURN NEW;
END;
$$
    LANGUAGE 'plpgsql';

CREATE TRIGGER t_user_private_list
    AFTER INSERT
    ON lituralia.tuser
    FOR EACH ROW
EXECUTE PROCEDURE p_initialize_private_list();


