import Application from 'dummy/app';
import config from 'dummy/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import { useNativeEvents } from 'ember-cli-page-object/extend';

setApplication(Application.create(config.APP));
useNativeEvents();
start();
