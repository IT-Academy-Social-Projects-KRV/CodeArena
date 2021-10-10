class PostgresRouter:
    # List what contain apps what can use default database.
    route_app_labels = {'auth', 'contenttypes', 'sessions', 'admin', 'user', 'vacancies', 'social_django'}

    def db_for_read(self, model, **hints):
        """
        Attempts to read models in route_app_labels apps go to default db.
        """
        if model._meta.app_label in self.route_app_labels:
            return 'default'
        return None

    def db_for_write(self, model, **hints):
        """
        Attempts to write models in route_app_labels apps go to default db.
        """
        if model._meta.app_label in self.route_app_labels:
            return 'default'
        return None

    def allow_relation(self, obj1, obj2, **hints):
        """
        Allow relations if a model in route_app_labels apps is
        involved.
        """
        if (
            obj1._meta.app_label in self.route_app_labels or
            obj2._meta.app_label in self.route_app_labels
        ):
            return True
        return None

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        """
        Make sure the apps in route_app_labels only appear in the
        default db.
        """
        if app_label in self.route_app_labels:
            return db == 'default'
        return None


class MongoRouter:
    # List what contain apps what can use mongo database.
    route_app_labels = {
        'task',
        'competition',
        'news'
    }

    def db_for_read(self, model, **hints):
        """
        Attempts to read models in route_app_labels apps go to mongo db.
        """
        if model._meta.app_label in self.route_app_labels:
            return 'mongo'
        return None

    def db_for_write(self, model, **hints):
        """
        Attempts to write models in route_app_labels apps go to mongo db.
        """
        if model._meta.app_label in self.route_app_labels:
            return 'mongo'
        return None

    def allow_relation(self, obj1, obj2, **hints):
        """
        Allow relations if a model in route_app_labels apps is
        involved.
        """
        if (
            obj1._meta.app_label in self.route_app_labels or
            obj2._meta.app_label in self.route_app_labels
        ):
            return True
        return None

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        """
        Make sure the apps in route_app_labels only appear in the
        mongo db.
        """
        if app_label in self.route_app_labels:
            return db == 'mongo'
        return None
