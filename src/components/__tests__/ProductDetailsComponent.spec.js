import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import ProductListComponent from '../ProductListComponent.vue';

describe('ProductDetailsComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(ProductListComponent);
    expect(wrapper.text()).toContain('Speisekarte');
  });
});
