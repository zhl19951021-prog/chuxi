class AttendanceDatabase:
    def __init__(self):
        self.records = []  # List to hold attendance records

    def add_record(self, name, attendance, absence):
        record = {'name': name, 'attendance': attendance, 'absence': absence}
        self.records.append(record)
        return f"Record for {name} added."

    def query_record(self, name):
        for record in self.records:
            if record['name'] == name:
                return record
        return f"Record for {name} not found."

    def update_record(self, name, attendance=None, absence=None):
        for record in self.records:
            if record['name'] == name:
                if attendance is not None:
                    record['attendance'] = attendance
                if absence is not None:
                    record['absence'] = absence
                return f"Record for {name} updated."
        return f"Record for {name} not found."

# Example usage:
# db = AttendanceDatabase()
# db.add_record('John Doe', 5, 1)
# print(db.query_record('John Doe'))
# db.update_record('John Doe', absence=2)
