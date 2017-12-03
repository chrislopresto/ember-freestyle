import resolver from './helpers/resolver';
import {
  setResolver
} from 'ember-qunit';
import { start } from 'ember-cli-qunit';
import { useNativeEvents } from 'ember-cli-page-object/extend';

setResolver(resolver);
start();
useNativeEvents();
