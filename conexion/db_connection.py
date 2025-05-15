import pyodbc

def get_connection():
    """
    Establishes and returns a connection to the SQL Server database.
    Connection parameters are set to match the provided PHP example.
    """
    server = "SERVAUTOMUELLES\\SQLDEVELOPER"
    database = "AutomuellesDiesel1"
    username = "Hgi"
    password = "Hgi"

    connection_string = (
        f"Driver={{ODBC Driver 17 for SQL Server}};"
        f"Server={server};"
        f"Database={database};"
        f"UID={username};"
        f"PWD={password};"
    )
    try:
        conn = pyodbc.connect(connection_string)
        print("Connection to SQL Server established successfully.")
        return conn
    except pyodbc.Error as e:
        print("Error connecting to SQL Server:", e)
        return None
