<template>
  <Layout>
    <TopBlock v-bind:title=title v-bind:subtitle=subtitle />
    <div class="about-company">
      <p class="large">We grow brands people love for companies that are changing <br> how the world works.</p>
      <div class="description">
        <p class="small">We&nbsp;started Basov Design Bureau in&nbsp;2008. Our vision from day one was to&nbsp;apply strategic <br>
          and creative thinking to&nbsp;propel startups to&nbsp;success.</p>
        <p class="small">We&nbsp;work with companies who are challenging the status quo. This means finding new ways
          to&nbsp;connect with people through bold ideas and experiences. We&nbsp;believe that brand is&nbsp;not just
          a&nbsp;competitive advantage&nbsp;&mdash; it&rsquo;s a&nbsp;core driver of&nbsp;business growth.</p>
      </div>
      <div class="numbers">
        <div class="number-block">
          <p class="number">2015</p>
          <p class="number-description">Year of foundation </p>
        </div>
        <div class="number-block">
          <p class="number">45</p>
          <p class="number-description">Employees of the company</p>
        </div>
        <div class="number-block">
          <p class="number">450</p>
          <p class="number-description">Completed projects</p>
        </div>
      </div>
      <div class="button-wrapper">
        <button class="make">Make a project</button>
      </div>
      <div class="services">
        <p class="title">Our services</p>
        <List v-bind:items="links"/>
      </div>
    </div>
    <div class="find-solution">
      <g-image alt="" src="~/assets/img/find_solution.jpg"/>
      <div class="button-wrapper">
        <button>
          Find a solution with us
        </button>
      </div>
    </div>
    <div class="how-we-work">
        <p class="large">Currently creating sexyness for Deutsche Telekom. Part of&nbsp;Jury
          panel at&nbsp;Awwwards. Driven by&nbsp;his intuition Nemanja has enjoyed
          success with the renown agency Fantasy, as&nbsp;well as&nbsp;Striker-Digital,
          Republik Media and many others.</p>
        <p class="large">How we&nbsp;work with clients</p>
        <p class="small">
          We&nbsp;started Basov Design Bureau in&nbsp;2008. Our vision from day one was to&nbsp;apply strategic
          <br>and creative thinking to&nbsp;propel startups to&nbsp;success.
        </p>
        <p class="small">
          We&nbsp;work with companies who are challenging the status quo. This means finding new ways
          to&nbsp;connect with people through bold ideas and experiences. We&nbsp;believe that brand is&nbsp;not just
          a&nbsp;competitive advantage&nbsp;&mdash; it&rsquo;s a&nbsp;core driver of&nbsp;business growth.
        </p>
        <div class="groups">
          <div class="group">
            <div class="group-image"><g-link><g-image alt="" src="~/assets/img/adobe.png"/></g-link></div>
            <div class="group-image"><g-link><g-image alt="" src="~/assets/img/netflix.png"/></g-link></div>
            <div class="group-image"><g-link><g-image alt="" src="~/assets/img/mozilla.png"/></g-link></div>
            <div class="group-image"><g-link><g-image alt="" src="~/assets/img/salesforce.png"/></g-link></div>
          </div>
          <div class="group">
            <div class="group-image"><g-link><g-image alt="" src="~/assets/img/advance.png"/></g-link></div>
            <div class="group-image"><g-link><g-image alt="" src="~/assets/img/xero.png"/></g-link></div>
            <div class="group-image"><g-link><g-image alt="" src="~/assets/img/opera.png"/></g-link></div>
            <div class="group-image"><g-link><g-image alt="" src="~/assets/img/tile.png"/></g-link></div>
          </div>
        </div>
    </div>
  </Layout>
</template>

<script>
import TopBlock from "../components/TopBlock";
import List from "../components/List";
export default {
  components: {List, TopBlock},
  data() {
    return {
      title: 'About Company',
      subtitle: 'We can We create',
      data() {
        return {
          links: [
            ['IT consulting', 'Prototyping', 'Custom software development'],
            ['Application Integration', 'Migrating applications and data','Software upgrade'],
            ['Information Security', 'Virtualization', 'SAP Consulting'],
            ['Independent testing', 'Maintenance and support', 'Dedicated development centers']
          ]
        }
      }
    }
  },
  metaInfo: {
    title: 'About Company'
  }
}
</script>

<style lang="scss">
  .about-company {
    padding: 110px 15%;
  }
  .description {
    max-width: 56.8%;
  }
  .numbers {
    display: flex;
    margin-bottom: 55px;
    justify-content: space-between;
    width: 81%;
    .number-block {
      display: flex;
      flex-direction: column;
      .number {
        margin-top: 15px;
        margin-bottom: 0;
        font-size: 53px;
        font-weight: bold;
      }
      .number-description {
        margin-top: 0;
        font-size: 10.5px;
      }
    }
  }
  .services {
    margin-top: 135px;
    .list {
      margin-top: 37px;
    }
  }
  .find-solution {
    position: relative;
    img {
      width: 100%;
    }
    .button-wrapper {
      position: absolute;
      bottom: 77px;
      right: 0;
      left: 0;
      margin: auto;
      width: 70%;
      height: 72px;
      text-align: center;
      button {
        width: 100%;
        height: 100%;
        font-size: 15px;
        text-transform: uppercase;
        font-weight: 100;
        border: solid 1px white;
      }
    }
  }
  .how-we-work {
    padding: 105px 15% 147px;
    .large {
      max-width: 80%;
    }
    .small {
      max-width: 60%;
    }
    .groups {
      display: flex;
      flex-direction: column;
      .group {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 160px;
        img {
          max-width: 100px;
        }
        .group-image {
          height: 45px;
          margin-top: 49px;
        }
      }
    }
  }
</style>
