import os

from django.core.files.base import ContentFile


def delete_testsfile(path):
    os.remove(os.path.join(path))

def create_testsfile(task, filecontent):
    task.unit_test.save(f"{task.name}/tests.txt", ContentFile(filecontent))
