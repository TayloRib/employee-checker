INSERT INTO department (name)
VALUES ("Management"),
        ("Treasury"),
        ("Warehouse");

INSERT INTO role (title, salary, department_id)
VALUES ("Guy who Babysits", 120.5, 1),
        ("Guy who knows Money", 80.1, 2),
        ("Guy who orders Stuff", 45.6, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Joe", "Biden", 1, NULL),
        ("Marilynn", "Malerba", 2, 1),
        ("Bernie", "Sanders", 3, 2);

