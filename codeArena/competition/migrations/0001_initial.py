from django.db import migrations, models
import django.db.models.deletion
import djongo.models.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('task', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Competition',
            fields=[
                ('_id', djongo.models.fields.ObjectIdField(auto_created=True, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=150, unique=True)),
                ('description', models.TextField()),
                ('start_time', models.DateTimeField()),
                ('finish_time', models.DateTimeField()),
                ('created_at', models.DateTimeField(editable=False)),
                ('updated_at', models.DateTimeField()),
                ('recruiter_id', models.UUIDField(editable=False)),
                ('list_of_task', djongo.models.fields.ArrayReferenceField(on_delete=django.db.models.deletion.CASCADE, to='task.task')),
            ],
        ),
        migrations.CreateModel(
            name='CoderCompetition',
            fields=[
                ('_id', djongo.models.fields.ObjectIdField(auto_created=True, primary_key=True, serialize=False)),
                ('coder_id', models.CharField(max_length=32)),
                ('rate', models.IntegerField()),
                ('competition_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='competition.competition')),
            ],
        ),
    ]
