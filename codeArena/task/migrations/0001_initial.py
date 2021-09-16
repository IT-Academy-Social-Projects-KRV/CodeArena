from django.db import migrations, models
import django.db.models.deletion
import djongo.models.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('_id', djongo.models.fields.ObjectIdField(auto_created=True, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Language',
            fields=[
                ('_id', djongo.models.fields.ObjectIdField(auto_created=True, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('_id', djongo.models.fields.ObjectIdField(auto_created=True, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=150, unique=True)),
                ('description', models.TextField()),
                ('user_id', models.UUIDField()),
                ('unit_test', models.FileField(max_length=500, upload_to='')),
                ('rate', models.IntegerField()),
                ('level', models.CharField(max_length=20)),
                ('status', models.CharField(choices=[('DR', 'Draft'), ('PB', 'Published')], default='DR', max_length=2)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('categories', djongo.models.fields.JSONField()),
                ('languages', djongo.models.fields.JSONField()),
            ],
        ),
        migrations.CreateModel(
            name='CoderTask',
            fields=[
                ('_id', djongo.models.fields.ObjectIdField(auto_created=True, primary_key=True, serialize=False)),
                ('coder_id', models.CharField(default='', max_length=36)),
                ('solution', models.TextField()),
                ('status', models.BooleanField()),
                ('task_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='task.task')),
            ],
        ),
    ]
