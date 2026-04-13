import Avatar from 'charlesfries/components/avatar';
import Contact from 'charlesfries/components/contact';
import Description from 'charlesfries/components/description';
import Heading from 'charlesfries/components/heading';
import Locale from 'charlesfries/components/locale';
import Skills from 'charlesfries/components/skills';

<template>
  <div class="container py-5">
    <header class="row justify-content-between mb-5">
      <div class="col-lg-6 col-md-7 col-sm-8 col-10">
        <Heading />
        <Locale />
        <Description />
        <Contact />
        <Skills />
      </div>
      <div class="col-2 d-none d-sm-block">
        <Avatar />
      </div>
    </header>
    {{outlet}}
  </div>
</template>
