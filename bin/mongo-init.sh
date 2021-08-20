db.createUser(
	{
		user: "codearena",
		pwd: "password",
		roles: [
			{
				role: "dbOwner",
				db: "codearena_mdb"
			}
					                ]
			        }
);
