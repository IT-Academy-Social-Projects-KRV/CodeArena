db.createUser(
	{
		user: ${MONGODB_USER},
		pwd: ${MONGODB_USER_PASS},
		roles: [
			{
				role: "dbOwner",
				db: ${MONGODB_NAME}
			}
					                ]
			        }
);
