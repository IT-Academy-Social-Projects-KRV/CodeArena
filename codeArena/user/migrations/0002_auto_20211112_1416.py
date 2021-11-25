from django.db import migrations, models
import django.utils.timezone
import user.models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='user',
            options={'verbose_name': 'user', 'verbose_name_plural': 'users'},
        ),
        migrations.AlterModelManagers(
            name='user',
            managers=[
                ('objects', user.models.UserManager()),
            ],
        ),
        migrations.RemoveField(
            model_name='role',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='role',
            name='email',
        ),
        migrations.RemoveField(
            model_name='role',
            name='first_name',
        ),
        migrations.RemoveField(
            model_name='role',
            name='last_name',
        ),
        migrations.RemoveField(
            model_name='role',
            name='nickname',
        ),
        migrations.RemoveField(
            model_name='role',
            name='password',
        ),
        migrations.RemoveField(
            model_name='role',
            name='role_id',
        ),
        migrations.RemoveField(
            model_name='role',
            name='updated_at',
        ),
        migrations.RemoveField(
            model_name='user',
            name='nickname',
        ),
        migrations.AddField(
            model_name='role',
            name='name',
            field=models.CharField(default='', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user',
            name='date_joined',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined'),
        ),
        migrations.AddField(
            model_name='user',
            name='is_active',
            field=models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active'),
        ),
        migrations.AddField(
            model_name='user',
            name='is_staff',
            field=models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status'),
        ),
        migrations.AddField(
            model_name='user',
            name='username',
            field=models.CharField(blank=True, max_length=150, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='first_name',
            field=models.CharField(blank=True, max_length=70, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='last_name',
            field=models.CharField(blank=True, max_length=70, null=True),
        ),
    ]
