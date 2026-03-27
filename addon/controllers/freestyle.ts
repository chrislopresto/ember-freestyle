import Controller from '@ember/controller';
import type EmberFreestyleService from 'ember-freestyle/services/ember-freestyle';

/* eslint-disable @typescript-eslint/no-unused-vars */
import { service } from '@ember/service';
// eslint-disable-next-line ember/no-computed-properties-in-native-classes
import { alias } from '@ember/object/computed';
/* eslint-enable @typescript-eslint/no-unused-vars */

export default class FreestyleController extends Controller {
  @service('ember-freestyle') declare emberFreestyle: EmberFreestyleService;

  queryParams = ['l', 'n', 'c', 'a', 'm', 'f', 's', 'ss'];

  @alias('emberFreestyle.showLabels') declare l: boolean;
  @alias('emberFreestyle.showNotes') declare n: boolean;
  @alias('emberFreestyle.showCode') declare c: boolean;
  @alias('emberFreestyle.showApi') declare a: boolean;

  @alias('emberFreestyle.showMenu') declare m: boolean;

  @alias('emberFreestyle.focus') declare f: string;

  @alias('emberFreestyle.section') declare s: string;
  @alias('emberFreestyle.subsection') declare ss: string;
}
