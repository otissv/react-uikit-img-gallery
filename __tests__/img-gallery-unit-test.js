'use strict';
import test from 'tape';
import ImgGroup from '../lib/img-gallery';
import React from 'react';
import renderElement from './helpers/renderElement';


test('img-gallery Component', nested => {
  nested.test('Renders img gallery component.',
    assert => {
      const imgGroup = renderElement(<ImgGroup items={[
        {src: 'docs/images/placeholder_200x150_2.svg', kitid: 'iGid1'},
        {src: 'docs/images/placeholder_200x150_2.svg', kitid: 'iGid2'}
      ]}/>).dom();

      const actual = imgGroup.html();

      /* eslint-disable smells/no-complex-string-concat */
      const expect = '<div>' +
        '<img src="docs/images/placeholder_200x150_2.svg" data-kitid="iGid1">' +
        '<img src="docs/images/placeholder_200x150_2.svg" data-kitid="iGid2">' +
      '</div>';
      /* eslint-enable no-complex-string-concat */

      assert.equals(actual, expect,
        'Correctly renders image gallery element');

      assert.end();
    });

  nested.test('Renders img gallery component with item props.',
    assert => {
      const imgGroup = renderElement(<ImgGroup items={[
        {src: 'docs/images/placeholder_200x150_2.svg', props: {margin: 'bottom right'}, kitid: 'imglx1'}
      ]}/>).dom();

      const actual = imgGroup.html();

      /* eslint-disable smells/no-complex-string-concat */
      const expect = '<div>' +
        '<img src="docs/images/placeholder_200x150_2.svg" data-kitid="imglx1" class="uk-margin-bottom uk-margin-right">' +
      '</div>';
      /* eslint-enable no-complex-string-concat */

      assert.equals(actual, expect,
        'Correctly renders image gallery element');

      assert.end();
    });

});
